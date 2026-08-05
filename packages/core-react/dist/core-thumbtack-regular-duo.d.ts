import React from 'react';

export interface CoreThumbtackRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreThumbtackRegularDuo(props: CoreThumbtackRegularDuoProps): React.ReactElement;
export default CoreThumbtackRegularDuo;
