import React from 'react';

export interface LanTransporterEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTransporterEmptyThin(props: LanTransporterEmptyThinProps): React.ReactElement;
export default LanTransporterEmptyThin;
