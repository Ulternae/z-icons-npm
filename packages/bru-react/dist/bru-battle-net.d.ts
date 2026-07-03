import React from 'react';

export interface BruBattleNetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBattleNet(props: BruBattleNetProps): React.ReactElement;
export default BruBattleNet;
