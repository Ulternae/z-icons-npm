import React from 'react';

export interface LanGuaraniSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuaraniSignThin(props: LanGuaraniSignThinProps): React.ReactElement;
export default LanGuaraniSignThin;
