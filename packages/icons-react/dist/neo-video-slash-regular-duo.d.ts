import React from 'react';

export interface NeoVideoSlashRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVideoSlashRegularDuo: React.FC<NeoVideoSlashRegularDuoProps>;
export default NeoVideoSlashRegularDuo;
