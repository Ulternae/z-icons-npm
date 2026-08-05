import React from 'react';

export interface LanSpineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpineRegular(props: LanSpineRegularProps): React.ReactElement;
export default LanSpineRegular;
