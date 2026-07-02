import React from 'react';

export interface CoreThumbtackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreThumbtack(props: CoreThumbtackProps): React.ReactElement;
export default CoreThumbtack;
