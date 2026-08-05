import React from 'react';

export interface NeoLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLanguage(props: NeoLanguageProps): React.ReactElement;
export default NeoLanguage;
