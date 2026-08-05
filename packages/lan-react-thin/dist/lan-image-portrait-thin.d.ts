import React from 'react';

export interface LanImagePortraitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePortraitThin(props: LanImagePortraitThinProps): React.ReactElement;
export default LanImagePortraitThin;
