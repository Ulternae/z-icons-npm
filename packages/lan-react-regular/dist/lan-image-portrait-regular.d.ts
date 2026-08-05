import React from 'react';

export interface LanImagePortraitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImagePortraitRegular(props: LanImagePortraitRegularProps): React.ReactElement;
export default LanImagePortraitRegular;
