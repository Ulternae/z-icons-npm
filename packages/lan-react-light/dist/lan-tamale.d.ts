import React from 'react';

export interface LanTamaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTamale(props: LanTamaleProps): React.ReactElement;
export default LanTamale;
