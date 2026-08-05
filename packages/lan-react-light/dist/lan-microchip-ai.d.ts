import React from 'react';

export interface LanMicrochipAiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrochipAi(props: LanMicrochipAiProps): React.ReactElement;
export default LanMicrochipAi;
