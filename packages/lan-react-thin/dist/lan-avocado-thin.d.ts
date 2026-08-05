import React from 'react';

export interface LanAvocadoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAvocadoThin(props: LanAvocadoThinProps): React.ReactElement;
export default LanAvocadoThin;
