import React from 'react';

export interface LanCircleTugrikProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTugrik(props: LanCircleTugrikProps): React.ReactElement;
export default LanCircleTugrik;
