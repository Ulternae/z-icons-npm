import React from 'react';

export interface CoreLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLanguage(props: CoreLanguageProps): React.ReactElement;
export default CoreLanguage;
