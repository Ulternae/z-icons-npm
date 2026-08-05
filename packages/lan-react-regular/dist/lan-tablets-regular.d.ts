import React from 'react';

export interface LanTabletsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletsRegular(props: LanTabletsRegularProps): React.ReactElement;
export default LanTabletsRegular;
