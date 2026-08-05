import React from 'react';

export interface LanMotorcycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMotorcycleThin(props: LanMotorcycleThinProps): React.ReactElement;
export default LanMotorcycleThin;
