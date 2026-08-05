import React from 'react';

export interface LanSignLanguageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignLanguageThin(props: LanSignLanguageThinProps): React.ReactElement;
export default LanSignLanguageThin;
