import React from 'react';

export interface NeoLockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLockRegularDuo(props: NeoLockRegularDuoProps): React.ReactElement;
export default NeoLockRegularDuo;
