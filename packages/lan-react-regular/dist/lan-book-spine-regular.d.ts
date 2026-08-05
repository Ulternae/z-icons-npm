import React from 'react';

export interface LanBookSpineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpineRegular(props: LanBookSpineRegularProps): React.ReactElement;
export default LanBookSpineRegular;
