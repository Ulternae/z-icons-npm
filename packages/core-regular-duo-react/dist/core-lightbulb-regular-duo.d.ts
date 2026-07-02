import React from 'react';

export interface CoreLightbulbRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLightbulbRegularDuo(props: CoreLightbulbRegularDuoProps): React.ReactElement;
export default CoreLightbulbRegularDuo;
