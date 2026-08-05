import React from 'react';

export interface LanRacquetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRacquet(props: LanRacquetProps): React.ReactElement;
export default LanRacquet;
