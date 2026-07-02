import React from 'react';

export interface CoreLightbulbSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLightbulbSlash(props: CoreLightbulbSlashProps): React.ReactElement;
export default CoreLightbulbSlash;
