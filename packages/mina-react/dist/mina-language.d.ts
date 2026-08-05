import React from 'react';

export interface MinaLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLanguage(props: MinaLanguageProps): React.ReactElement;
export default MinaLanguage;
