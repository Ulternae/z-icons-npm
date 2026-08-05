import React from 'react';

export interface LanMegaphoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMegaphone(props: LanMegaphoneProps): React.ReactElement;
export default LanMegaphone;
