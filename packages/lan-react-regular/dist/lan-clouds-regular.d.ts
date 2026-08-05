import React from 'react';

export interface LanCloudsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloudsRegular(props: LanCloudsRegularProps): React.ReactElement;
export default LanCloudsRegular;
