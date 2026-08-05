import React from 'react';

export interface LanTransporterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporter(props: LanTransporterProps): React.ReactElement;
export default LanTransporter;
