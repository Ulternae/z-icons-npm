import React from 'react';

export interface LanTransporterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporterThin(props: LanTransporterThinProps): React.ReactElement;
export default LanTransporterThin;
