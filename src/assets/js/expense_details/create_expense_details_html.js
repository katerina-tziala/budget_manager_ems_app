/*
* CREATE HTML FOR EXPENSE DETAILS INTERFACE
*/
//create expense card
const createExpenseCard = (main = self.main) => {
  const expenseCard = document.createElement('div');
  expenseCard.setAttribute('id', 'expenseCard');
  expenseCard.classList.add('expenseCard', 'hidden');
  const expense_header = document.createElement('p');
  expense_header.setAttribute('id', 'expense_header');
  expense_header.innerHTML =  `expense #<span id='expense_index' class='cardData'></span>`;
  const categorySection = createCategorySection();
  const amountSection = createAmountSection();
  const paymentSection = createPaymentSection();
  const dateSection = createDateSection();
  const timeSection = createTimeSection();
  const locationSection = createCommonSection("location");
  const storeSection = createCommonSection("store");
  const commentsSection = createCommentsSection();
  expenseCard.append(expense_header, categorySection, amountSection, paymentSection, dateSection, timeSection, locationSection, storeSection, commentsSection);
  main.append(expenseCard);
};
//create catergory section
const createCategorySection = () => {
  const section = document.createElement('div');
  section.classList.add('expenseCardSection');
  const edit_btn = createEditButton('expense', 'category', toggleForm);
  edit_btn.classList.add('editBtn');
  const cancel_btn = createCancelButton('expense', 'category', toggleForm);
  cancel_btn.classList.add('editBtn');
  const save_btn = createSaveButton('expense', 'category', updateExpense);
  save_btn.classList.add('editBtn');
  const section_header = document.createElement('p');
  section_header.classList.add('section_header');
  section_header.innerHTML="category";
  const data_container = document.createElement('div');
  data_container.classList.add('centeredFlexbox', 'cardDataContainer');
  data_container.setAttribute('id', 'cardDataContainer_category');
  const category_icon = document.createElement('div');
  category_icon.classList.add('category_icon');
  const expense_data = document.createElement('p');
  expense_data.classList.add('cardData', 'expense_data');
  expense_data.setAttribute('id', 'expense_data_category');
  data_container.append(category_icon, expense_data);
  const form = document.createElement('form');
  form.setAttribute('id', 'form_category');
  form.classList.add('expenseForm', 'hidden');
  section.append(edit_btn, section_header, data_container, form, cancel_btn, save_btn);
  return section;
};
//create amount section
const createAmountSection = () => {
  const section = document.createElement('div');
  section.classList.add('expenseCardSection');
  const edit_btn = createEditButton('expense', 'amount', toggleForm);
  edit_btn.classList.add('editBtn');
  const cancel_btn = createCancelButton('expense', 'amount', toggleForm);
  cancel_btn.classList.add('editBtn');
  const save_btn = createSaveButton('expense', 'amount', updateExpense);
  save_btn.classList.add('editBtn');
  const section_header = document.createElement('p');
  section_header.classList.add('section_header');
  section_header.innerHTML="amount";
  const data_container = document.createElement('div');
  data_container.classList.add('centeredFlexbox', 'cardDataContainer');
  data_container.setAttribute('id', 'cardDataContainer_amount');
  const icon = document.createElement('div');
  icon.classList.add('fas', 'fa-euro-sign');
  icon.setAttribute('id', 'amountIcon');
  const expense_data = document.createElement('p');
  expense_data.classList.add('cardData', 'expense_data');
  expense_data.setAttribute('id', 'expense_data_amount');
  data_container.append(icon, expense_data);
  const form = document.createElement('form');
  form.setAttribute('id', 'form_amount');
  form.classList.add('expenseForm', 'hidden');
  const expenseFormSection = document.createElement('div');
  expenseFormSection.className = "expenseFormSection";
  const amount_input = createAmountInput('enter expense amount', 'expense_amount', 'expense_amount_input', 'expense_amount');
  const label = createLabel('expense_amount');
  label.classList.add('expense_amount_label');
  expenseFormSection.append(amount_input, label);
  form.append(expenseFormSection);
  section.append(edit_btn, section_header, data_container, form, cancel_btn, save_btn);
  return section;
};
//create payment section
const createPaymentSection = () => {
  const section = document.createElement('div');
  section.classList.add('expenseCardSection');
  const edit_btn = createEditButton('expense', 'payment', toggleForm);
  edit_btn.classList.add('editBtn');
  const cancel_btn = createCancelButton('expense', 'payment', toggleForm);
  cancel_btn.classList.add('editBtn');
  const save_btn = createSaveButton('expense', 'payment', updateExpense);
  save_btn.classList.add('editBtn');
  const section_header = document.createElement('p');
  section_header.classList.add('section_header');
  section_header.innerHTML="payment method";
  const data_container = document.createElement('div');
  data_container.classList.add('centeredFlexbox', 'cardDataContainer');
  data_container.setAttribute('id', 'cardDataContainer_payment');
  const icon = document.createElement('div');
  icon.classList.add('payment_icon');
  icon.setAttribute('id', 'paymentIcon');
  const expense_data = document.createElement('p');
  expense_data.classList.add('cardData', 'expense_data');
  expense_data.setAttribute('id', 'expense_data_payment');
  data_container.append(icon, expense_data);
  const form = document.createElement('form');
  form.setAttribute('id', 'form_payment');
  form.classList.add('expenseForm', 'hidden');
  section.append(edit_btn, section_header, data_container, form, cancel_btn, save_btn);
  return section;
};
//create section location and store
const createCommonSection = (section_name) => {
  const section = document.createElement('div');
  section.classList.add('expenseCardSection');
  const edit_btn = createEditButton('expense', section_name, toggleForm);
  edit_btn.classList.add('editBtn');
  const cancel_btn = createCancelButton('expense', section_name, toggleForm);
  cancel_btn.classList.add('editBtn');
  const save_btn = createSaveButton('expense', section_name, updateExpense);
  save_btn.classList.add('editBtn');
  const section_header = document.createElement('p');
  section_header.classList.add('section_header');
  section_header.innerHTML=section_name;
  const data_container = document.createElement('div');
  data_container.classList.add('centeredFlexbox', 'cardDataContainer');
  data_container.setAttribute('id', `cardDataContainer_${section_name}`);
  const icon = document.createElement('div');
  if (section_name==="location") {
    icon.classList.add('fas', 'fa-map-marker-alt');
  }else {
    icon.classList.add('fas', 'fa-clock');
  }
  icon.setAttribute('id', `${section_name}Icon`);
  const expense_data = document.createElement('p');
  expense_data.classList.add('cardData', 'expense_data');
  expense_data.setAttribute('id', `expense_data_${section_name}`);
  data_container.append(icon, expense_data);
  const form = document.createElement('form');
  form.setAttribute('id', `form_${section_name}`);
  form.classList.add('expenseForm', 'hidden');
  const expenseFormSection = document.createElement('div');
  expenseFormSection.className = "expenseFormSection";
  const input = createInput('text', capitalizeFirstLetter(section_name), 'enter expense '+section_name, `expense_${section_name}`, `${section_name}_inpt_id`);
  input.classList.add(`expense_${section_name}_input`);
  const label = createLabel(`expense_${section_name}`);
  label.classList.add(`expense_${section_name}_label`);
  expenseFormSection.append(input, label);
  form.append(expenseFormSection);
  section.append(edit_btn, section_header, data_container, form, cancel_btn, save_btn);
  return section;
};
//create date section
const createDateSection = () => {
  const section = document.createElement('div');
  section.classList.add('expenseCardSection');
  const edit_btn = createEditButton('expense', 'date', toggleForm);
  edit_btn.classList.add('editBtn');
  const cancel_btn = createCancelButton('expense', 'date', toggleForm);
  cancel_btn.classList.add('editBtn');
  const save_btn = createSaveButton('expense', 'date', updateExpense);
  save_btn.classList.add('editBtn');
  const section_header = document.createElement('p');
  section_header.classList.add('section_header');
  section_header.innerHTML="date";
  const data_container = document.createElement('div');
  data_container.classList.add('centeredFlexbox', 'cardDataContainer');
  data_container.setAttribute('id', 'cardDataContainer_date');
  const icon = document.createElement('div');
  icon.classList.add('far', 'fa-calendar-alt');
  icon.setAttribute('id', 'dateIcon');
  const expense_data = document.createElement('p');
  expense_data.classList.add('cardData', 'expense_data');
  expense_data.setAttribute('id', 'expense_data_date');
  data_container.append(icon, expense_data);
  const form = document.createElement('form');
  form.setAttribute('id', 'form_date');
  form.classList.add('expenseForm', 'hidden');
  const expenseFormSection = document.createElement('div');
  expenseFormSection.className = "expenseFormSection";
  expenseFormSection.setAttribute('id', 'expenseFormSectionDate');
  const picker = document.createElement('div');
  picker.classList.add("pickerContainer");
  picker.setAttribute('id', 'datePick');
  picker.setAttribute('tabindex', 0);
  picker.setAttribute('aria-label', 'date picker');
  const pickerinp = document.createElement('span');
  pickerinp.classList.add("expense_input", "expense_date_input");
  pickerinp.setAttribute('id', 'datepickerInput');
  pickerinp.setAttribute('aria', 'enter date of expense');
  pickerinp.setAttribute('name', 'expense_date');
  pickerinp.innerHTML = "dd/mm/yyyy";
  const pickercalendar = document.createElement('i');
  pickercalendar.classList.add("calendar", "fas", "fa-calendar-alt");
  picker.append(pickerinp, pickercalendar);
  const label = createLabel('datePick');
  label.classList.add('expense_date_label');
  expenseFormSection.append(picker, label);
  form.append(expenseFormSection);
  section.append(edit_btn, section_header, data_container, form, cancel_btn, save_btn);
  return section;
};
//create time section
const createTimeSection = () => {
  const section = document.createElement('div');
  section.classList.add('expenseCardSection');
  const edit_btn = createEditButton('expense', 'time', toggleForm);
  edit_btn.classList.add('editBtn');
  const cancel_btn = createCancelButton('expense', 'time', toggleForm);
  cancel_btn.classList.add('editBtn');
  const save_btn = createSaveButton('expense', 'time', updateExpense);
  save_btn.classList.add('editBtn');
  const section_header = document.createElement('p');
  section_header.classList.add('section_header');
  section_header.innerHTML="time";
  const data_container = document.createElement('div');
  data_container.classList.add('centeredFlexbox', 'cardDataContainer');
  data_container.setAttribute('id', 'cardDataContainer_time');
  const icon = document.createElement('div');
  icon.classList.add('fas', 'fa-clock');
  icon.setAttribute('id', 'timeIcon');
  const expense_data = document.createElement('p');
  expense_data.classList.add('cardData', 'expense_data');
  expense_data.setAttribute('id', 'expense_data_time');
  data_container.append(icon, expense_data);
  const form = document.createElement('form');
  form.setAttribute('id', 'form_time');
  form.classList.add('expenseForm', 'hidden');
  const expenseFormSection = document.createElement('div');
  expenseFormSection.className = "expenseFormSection";
  const picker = document.createElement('div');
  picker.classList.add("pickerContainer");
  picker.setAttribute('id', 'timePicker');
  picker.setAttribute('tabindex', 0);
  picker.setAttribute('aria-label', 'time picker');
  const pickerinp = document.createElement('span');
  pickerinp.classList.add("expense_time_input");
  pickerinp.setAttribute('id', 'timePickerInput');
  pickerinp.setAttribute('aria', 'enter time of expense');
  pickerinp.setAttribute('name', 'expense_time');
  pickerinp.innerHTML = 'hh:mm';
  const pickerClock = document.createElement('i');
  pickerClock.classList.add("pickerClock", "fas", "fa-clock");
  picker.append(pickerinp, pickerClock);
  const label = createLabel('expense_time');
  label.classList.add('expense_time_label');
  expenseFormSection.append(picker, label);
  form.append(expenseFormSection);
  section.append(edit_btn, section_header, data_container, form, cancel_btn, save_btn);
  return section;
};
//create comments section
const createCommentsSection = () => {
  const section = document.createElement('div');
  section.classList.add('expenseCardSection');
  const edit_btn = createEditButton('expense', 'comments', toggleForm);
  edit_btn.classList.add('editBtn');
  const cancel_btn = createCancelButton('expense', 'comments', toggleForm);
  cancel_btn.classList.add('editBtn');
  const save_btn = createSaveButton('expense', 'comments', updateExpense);
  save_btn.classList.add('editBtn');
  const section_header = document.createElement('p');
  section_header.classList.add('section_header');
  section_header.innerHTML="comments";
  const data_container = document.createElement('div');
  data_container.classList.add('centeredFlexbox', 'cardDataContainer');
  data_container.setAttribute('id', 'cardDataContainer_comments');
  const icon = document.createElement('div');
  icon.classList.add('fas', 'fa-font');
  icon.setAttribute('id', 'commentsIcon');
  const expense_data = document.createElement('p');
  expense_data.classList.add('cardData', 'expense_data');
  expense_data.setAttribute('id', 'expense_data_comments');
  data_container.append(icon, expense_data);
  const form = document.createElement('form');
  form.setAttribute('id', 'form_comments');
  form.classList.add('expenseForm', 'hidden');
  const expenseFormSection = document.createElement('div');
  expenseFormSection.classList.add("expenseFormSection", "commentsFormSection");
  const input = createTextareaInput('Write your comments here', 'enter comments for expense', 'exp_comments', 'expComments');
  input.classList.add("expense_comments_input");
  const label = createLabel('exp_comments');
  label.classList.add('expense_comments_label');
  expenseFormSection.append(input, label);
  form.append(expenseFormSection);
  section.append(edit_btn, section_header, data_container, form, cancel_btn, save_btn);
  return section;
};