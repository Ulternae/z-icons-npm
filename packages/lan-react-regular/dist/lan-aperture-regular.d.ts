import React from 'react';

export interface LanApertureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApertureRegular(props: LanApertureRegularProps): React.ReactElement;
export default LanApertureRegular;
