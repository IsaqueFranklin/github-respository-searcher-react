import React, {useState} from 'react'

function Results(props) {

    const{ repos } = props;
    console.log('repo is: ', repos.data)

    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const listRepos = repos.length !==0 ? repos.data.map((item) => 

    <div key={item.id} class="bg-gray-900 shadow overflow-hidden sm:rounded-lg my-10">
    <div class="px-4 py-5 sm:px-6 center">
    <h3 class="text-lg leading-6 font-medium text-white">
        <a href={item.html_url}>{item.name}</a>  </h3>
    <p class="mt-1 max-w-2xl text-sm text-white">
        <a href={item.owner.html_url}>By {item.owner.login}</a>
    </p>
    </div>
    <div class="border-t border-gray-200">
    <dl>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
            Repository
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        <a href={item.html_url}>{item.name}</a>
        </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
            Owner
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <a href={item.owner.html_url}>{item.owner.login}</a>
        </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
            Created at
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {(new Date(item.created_at)).toLocaleDateString('en-US', DATE_OPTIONS)}
        </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">
            About
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {item.description}
        </dd>
        </div>
    </dl>
    </div>
    </div>

    ): <li>No repositories.</li>;

    return (
        <div>
           <ul class='text-2xl font-normal tracking-tight text-gray-900 sm:text-2xl'>{listRepos}</ul> 
        </div>
    )
}

export default Results
