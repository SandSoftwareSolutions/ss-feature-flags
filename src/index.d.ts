export interface Flag { key: string; enabled?: boolean; rollout?: number; allow?: string[]; deny?: string[]; }
export interface FlagContext { id?: string; [key: string]: unknown; }
export declare function inRollout(key: string, subject: string, percentage: number): boolean;
export declare function evaluate(flag: Flag, context?: FlagContext): boolean;
