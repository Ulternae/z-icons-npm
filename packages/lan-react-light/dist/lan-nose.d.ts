import React from 'react';

export interface LanNoseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNose(props: LanNoseProps): React.ReactElement;
export default LanNose;
