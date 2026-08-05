import React from 'react';

export interface LanSignLanguageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignLanguage(props: LanSignLanguageProps): React.ReactElement;
export default LanSignLanguage;
