import React from 'react';

export interface MinaLockPasswordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLockPassword(props: MinaLockPasswordProps): React.ReactElement;
export default MinaLockPassword;
