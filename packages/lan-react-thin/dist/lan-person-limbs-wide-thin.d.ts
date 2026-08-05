import React from 'react';

export interface LanPersonLimbsWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonLimbsWideThin(props: LanPersonLimbsWideThinProps): React.ReactElement;
export default LanPersonLimbsWideThin;
