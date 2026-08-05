import React from 'react';

export interface LanImagePortraitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePortrait(props: LanImagePortraitProps): React.ReactElement;
export default LanImagePortrait;
