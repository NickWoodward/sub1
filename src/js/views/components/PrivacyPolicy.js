import View from '../View';

export default class PrivacyPolicy extends View {
  _parentElement;
  _element;

  constructor(data) {
    super(data);
    this._data.markup = this._generateMarkup();
  }

  _generateMarkup() {
      const markup = /*html*/`
      <div class="privacy-policy__bg fixed inset-x-0 top-[var(--header-height)] h-section flex justify-center p-20 bg-gray-500 bg-opacity-75 transition-opacity z-50">
        <div class="privacy-policy__content w-4/5 mx-auto h-full">
          <div class="h-full">
            <div class="bg-white overflow-auto h-full py-8 px-12 mx-auto max-w-5xl shadow sm:rounded-lg">
              <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 class="mb-8 text-center text-2xl font-semibold tracking-tight text-slate-700">Privacy Policy</h2>
              </div>
              
              <p class="">
                This privacy policy applies between you, the User of this Website and SUB1 DCS Ltd, the owner and provider of this Website. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.
              </p>

              <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Definitions and interpretation</div>
              
              <ol class="" role="list">

                    <!-- ****ITEM**** -->
                  <li>
                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">1.</span> 
                      In this privacy policy, the following definitions are used:  
                    </div>
                    <!-- Definitions "table" -->
                    <div class="flex justify-between w-full mt-6 pt-4 border-t-2 border-gray-200">
                      <div class="font-semibold">Data</div>
                      <div class="w-4/6 ml-auto">collectively all information that you submit to SUB1 DCS Ltd via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Act 1998;</div>
                    </div>
                    
                    <div class="flex justify-between w-full mt-6 pt-4 border-t-2 border-gray-200">
                      <div class="font-semibold">SUB1 DCS Ltd, <span class="font-normal">or</span> us</div>
                      <div class="w-4/6 ml-auto">SUB1 DCS Ltd, a company incorporated in England and Wales, whose registered office is at The Acorns, Nounsley Road, CM3 2NF;</div>
                    </div>

                    <div class="flex justify-between w-full mt-6 pt-4 border-t-2 border-gray-200">
                      <div class="font-semibold">User <span class="font-normal">or</span> you</div>
                      <div class="w-4/6 ml-auto">any third party that accesses the Website and is not either (i) employed by SUB1 DCS Ltd and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to SUB1 DCS Ltd and accessing the Website in connection with the provision of such services; and</div>
                    </div>

                    <div class="flex justify-between w-full mt-6 mb-6 pt-4 pb-4 border-t-2 border-b-2 border-gray-200">
                      <div class="font-semibold">Website</div>
                      <div class="w-4/6 ml-auto">the website that you are currently using, www.sub1.io, and any sub-domains of this site unless expressly excluded by their own terms and conditions.</div>
                    </div>
                  </li>

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">2.</span> 
                      In this privacy policy, unless the context requires a different interpretation:
                    </div>
                    
                    <ol class="space-y-2 my-4 ml-6">
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">a.</span> the singular includes the plural and vice versa;</div></li>

                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">b.</span> references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;</div></li>
                      
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">c.</span> a reference to a person includes firms, companies, government entities, trusts and partnerships;</div></li>
                      
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">d.</span> "including" is understood to mean "including without limitation";</div></li>
                      
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">e.</span> reference to any statutory provision includes any modification or amendment of it;</div></li>
                      
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">f.</span> the headings and sub-headings do not form part of this privacy policy</div></li>
                    
                   </ol>
                  </li>              

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Scope of this privacy policy</div>

                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">3.</span> 
                      This privacy policy applies only to the actions of SUB1 DCS Ltd and Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites.
                    </div>
                  </li>

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Data collected</div>

                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">4.</span> 
                      We may collect the following Data, which includes personal Data, from you:
                    </div>
                    <ol class="space-y-2 my-4 ml-6">
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">a.</span> Name;</div></li>

                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">b.</span> Contact Information such as email addresses and telephone numbers;</div></li>
                      
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">c.</span> Demographic information such as country;</div></li>
                      
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">d.</span> in each case, in accordance with this privacy policy</div></li>
                      
                    </ol>
                  </li>

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Our use of Data</div>

                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">5.</span> 
                      For purposes of the Data Protection Act 1998, SUB1 DCS Ltd is the "data controller".
                    </div>
                    
                  </li>

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">6.</span> 
                      We will retain any Data you submit on a 1 month rolling basis while you use the service.
                    </div>

                  </li>

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">7.</span> 
                      Unless we are obliged or permitted by law to do so, and subject to any third party disclosures specifically set out in this policy, your Data will not be disclosed to third parties. This includes our affiliates and / or other companies within our group. 
                    </div>
                  </li>

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">8.</span> 
                      All personal Data is stored securely in accordance with the principles of the Data Protection Act 1998. For more details on security see the clause below (Security).                    
                    </div>
                  </li>

                  <!-- ****ITEM**** -->
                  <li>
                    <div class="numbered-item flex mb-4">
                      <span class="font-semibold mr-2">9.</span> 
                      Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons:
                    </div>
                    <ol class="space-y-2 my-4 ml-6">
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">a.</span> internal record keeping;</div></li>

                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">b.</span> general management of users;</div></li>
                      
                      <li><div class="numbered-item flex"><span class="font-semibold text-gray-600 mr-2">c.</span> general service support;</div></li>
                      
                      <li><div class="numbered-item flex"> in each case, in accordance with this privacy policy</div></li>
                      
                    </ol>
                  </li>


                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Third party websites and services</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">10.</span> 
                    SUB1 DCS Ltd may, from time to time, employ the services of other parties for dealing with certain processes necessary for the operation of the Website. The providers of such services do not have access to certain personal Data provided by Users of this Website.
                  </div>
                  
                </li>

                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Links to other websites</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">11.</span> 
                    This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them.
                  </div>

                </li>

                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Cookie Policy</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">12.</span> 
                    <div>SUB1 DCS Ltd use cookies on www.sub1.io and all other derivatives of the website. Cookies are necessary to deliver the optimum experience to the user, and are used to remember things like user preferences, such as what devices a user selected last time when entering a meeting. Cookies are also used to auto populate fields such as name or email address when logging into the site, again to make the service more user-friendly. Finally, third-party cookies are used to monitor and track the usage of our website to ascertain who has visited and could they find what they needed easily. Some third-party cookies, such as Google Adwords, are used for re-marketing / advertising based on the actions of the user. By continuing to use the site you agree to the use of cookies. To find out more about cookies, including how to control and disable them, please visit <a href="#" class="inline color-primary">https://www.allaboutcookies.org</a></div>
                  </div>

                </li>

                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Changes of business ownership and control</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">13.</span> 
                    SUB1 DCS Ltd may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of SUB1 DCS Ltd. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us.
                  </div>

                </li>
                
                <!-- ****ITEM**** -->
                <li>
                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">14.</span> 
                    We may also disclose Data to a prospective purchaser of our business or any part of it.
                  </div>

                </li>

                <!-- ****ITEM**** -->
                <li>
                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">15.</span> 
                    In the above instances, we will take steps with the aim of ensuring your privacy is protected.
                  </div>

                </li>

                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Functionality of the Website</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">16.</span> 
                    To use all features and functions available on the Website, you may be required to submit certain Data. 
                  </div>

                </li>
                
                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Accessing your own data</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">17.</span> 
                    You have the right to ask for a copy of any of your personal Data held by SUB1 DCS Ltd (where such Data is held).
                  </div>

                </li>  

                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Security</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">18.</span> 
                    Data security is of great importance to SUB1 DCS Ltd and to protect your Data we have put in place suitable physical, electronic and managerial procedures to safeguard and secure Data collected via this Website.
                  </div>

                </li>  

                <!-- ****ITEM**** -->
                <li>
                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">19.</span> 
                    If password access is required for certain parts of the Website, you are responsible for keeping this password confidential.
                  </div>

                </li>  

                <!-- ****ITEM**** -->
                <li>
                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">20.</span> 
                    We endeavour to do our best to protect your personal Data. However, transmission of information over the internet is not entirely secure and is done at your own risk. We cannot ensure the security of your Data transmitted to the Website
                  </div>

                </li> 

                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">General</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">21.</span> 
                    You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.
                  </div>

                </li>  

                <!-- ****ITEM**** -->
                <li>
                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">22.</span> 
                    If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.
                  </div>
                </li> 

                <!-- ****ITEM**** -->
                <li>
                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">23.</span> 
                    Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.
                  </div>
                </li> 

                <!-- ****ITEM**** -->
                <li>
                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">24.</span> 
                    This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts
                  </div>
                </li> 


                <!-- ****ITEM**** -->
                <li>
                  <div class="font-semibold text-lg color-gray-900 mt-10 mb-4">Changes to this privacy policy</div>

                  <div class="numbered-item flex mb-4">
                    <span class="font-semibold mr-2">25.</span> 
                    SUB1 DCS Ltd reserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations. You may contact SUB1 DCS Ltd to request a copy of data, amend collected data or ask questions regarding this Privacy Policy by email here
                  </div>

                </li> 
          
              </ol>
            </div>
          </div>
        </div>
      </div>
    `;

    return markup;

  }

  _render() {
    this._setParentElement();
    super._render();
    this._initElements();
  }

  _setParentElement() {
    this._parentElement = document.querySelector('.index-view');
       
  };

  _initElements() {
    this._element = document.querySelector('.privacy-policy__bg');
  }

  getFormData() {
    const data = new FormData(this._privacy-policyForm);
    return data;
  }

  addCloseHander(handler) {
    this._element.addEventListener('click', handler);
  }

}