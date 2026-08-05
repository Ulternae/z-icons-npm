import React from 'react';

export interface LanShirtJerseySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtJerseySolid(props: LanShirtJerseySolidProps): React.ReactElement;
export default LanShirtJerseySolid;
