import React from 'react';

export interface LanWardrobeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWardrobeRegular(props: LanWardrobeRegularProps): React.ReactElement;
export default LanWardrobeRegular;
