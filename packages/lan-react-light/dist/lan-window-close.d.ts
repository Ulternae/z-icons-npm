import React from 'react';

export interface LanWindowCloseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowClose(props: LanWindowCloseProps): React.ReactElement;
export default LanWindowClose;
