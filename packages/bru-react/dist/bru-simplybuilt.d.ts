import React from 'react';

export interface BruSimplybuiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSimplybuilt(props: BruSimplybuiltProps): React.ReactElement;
export default BruSimplybuilt;
