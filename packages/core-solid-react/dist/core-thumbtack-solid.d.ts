import React from 'react';

export interface CoreThumbtackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreThumbtackSolid(props: CoreThumbtackSolidProps): React.ReactElement;
export default CoreThumbtackSolid;
