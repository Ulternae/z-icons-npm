import React from 'react';

export interface LanSmokingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmokingRegular(props: LanSmokingRegularProps): React.ReactElement;
export default LanSmokingRegular;
