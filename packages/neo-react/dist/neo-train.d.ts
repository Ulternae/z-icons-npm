import React from 'react';

export interface NeoTrainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrain(props: NeoTrainProps): React.ReactElement;
export default NeoTrain;
