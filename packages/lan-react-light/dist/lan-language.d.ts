import React from 'react';

export interface LanLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLanguage(props: LanLanguageProps): React.ReactElement;
export default LanLanguage;
