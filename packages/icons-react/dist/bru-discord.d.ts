import React from 'react';

export interface BruDiscordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDiscord: React.FC<BruDiscordProps>;
export default BruDiscord;
