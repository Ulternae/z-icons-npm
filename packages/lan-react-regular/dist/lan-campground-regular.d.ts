import React from 'react';

export interface LanCampgroundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampgroundRegular(props: LanCampgroundRegularProps): React.ReactElement;
export default LanCampgroundRegular;
