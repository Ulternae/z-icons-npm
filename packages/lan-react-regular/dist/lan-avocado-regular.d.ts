import React from 'react';

export interface LanAvocadoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAvocadoRegular(props: LanAvocadoRegularProps): React.ReactElement;
export default LanAvocadoRegular;
