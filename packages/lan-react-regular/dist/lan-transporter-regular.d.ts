import React from 'react';

export interface LanTransporterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporterRegular(props: LanTransporterRegularProps): React.ReactElement;
export default LanTransporterRegular;
