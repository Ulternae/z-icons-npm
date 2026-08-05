import React from 'react';

export interface LanTransporterEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporterEmpty(props: LanTransporterEmptyProps): React.ReactElement;
export default LanTransporterEmpty;
