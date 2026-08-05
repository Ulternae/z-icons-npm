import React from 'react';

export interface LanTableDiningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableDining(props: LanTableDiningProps): React.ReactElement;
export default LanTableDining;
