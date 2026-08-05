import React from 'react';

export interface LanFaceDizzyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDizzy(props: LanFaceDizzyProps): React.ReactElement;
export default LanFaceDizzy;
