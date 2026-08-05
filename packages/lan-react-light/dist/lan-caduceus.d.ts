import React from 'react';

export interface LanCaduceusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaduceus(props: LanCaduceusProps): React.ReactElement;
export default LanCaduceus;
