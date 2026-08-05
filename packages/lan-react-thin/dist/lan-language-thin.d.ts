import React from 'react';

export interface LanLanguageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLanguageThin(props: LanLanguageThinProps): React.ReactElement;
export default LanLanguageThin;
