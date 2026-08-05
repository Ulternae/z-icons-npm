import React from 'react';

export interface LanLibraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLibra(props: LanLibraProps): React.ReactElement;
export default LanLibra;
